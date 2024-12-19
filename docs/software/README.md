# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення та початкового наповнення бази даних

```sql
  CREATE DATABASE lab5;
USE lab5;

-- Таблица User
CREATE TABLE User (
    id CHAR(36) PRIMARY KEY, -- Хранение UUID
    password TEXT NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL, -- Указана длина для UNIQUE
    email VARCHAR(100) UNIQUE NOT NULL,   -- Указана длина для UNIQUE
    role VARCHAR(50) NOT NULL
);

-- Таблица Attributes
CREATE TABLE Attributes (
    id CHAR(36) PRIMARY KEY,
    description TEXT,
    value TEXT,
    attributeType VARCHAR(50),
    name VARCHAR(100)
);

-- Таблица Permissions
CREATE TABLE Permissions (
    id CHAR(36) PRIMARY KEY,
    description TEXT,
    level INT,
    name VARCHAR(100)
);

-- Таблица UserAttributes
CREATE TABLE UserAttributes (
    UserID CHAR(36),
    AttributeID CHAR(36),
    PRIMARY KEY (UserID, AttributeID),
    FOREIGN KEY (UserID) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (AttributeID) REFERENCES Attributes(id) ON DELETE CASCADE
);

-- Таблица Search
CREATE TABLE Search (
    id CHAR(36) PRIMARY KEY,
    status VARCHAR(50),
    searchType VARCHAR(50),
    target TEXT,
    parameters TEXT
);

-- Таблица User_has_Search
CREATE TABLE User_has_Search (
    User_id CHAR(36),
    Search_id CHAR(36),
    PRIMARY KEY (User_id, Search_id),
    FOREIGN KEY (User_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (Search_id) REFERENCES Search(id) ON DELETE CASCADE
);

-- Таблица DataLink
CREATE TABLE DataLink (
    link VARCHAR(255) PRIMARY KEY
);

-- Таблица Search_has_DataLink
CREATE TABLE Search_has_DataLink (
    Search_id CHAR(36),
    DataLink_link VARCHAR(255),
    PRIMARY KEY (Search_id, DataLink_link),
    FOREIGN KEY (Search_id) REFERENCES Search(id) ON DELETE CASCADE,
    FOREIGN KEY (DataLink_link) REFERENCES DataLink(link) ON DELETE CASCADE
);

-- Таблица DataFolder
CREATE TABLE DataFolder (
    id CHAR(36) PRIMARY KEY,
    description TEXT,
    date DATETIME,
    owner VARCHAR(100),
    name VARCHAR(100)
);

-- Таблица DataFolder_has_DataLink
CREATE TABLE DataFolder_has_DataLink (
    DataFolder_id CHAR(36),
    DataLink_link VARCHAR(255),
    PRIMARY KEY (DataFolder_id, DataLink_link),
    FOREIGN KEY (DataFolder_id) REFERENCES DataFolder(id) ON DELETE CASCADE,
    FOREIGN KEY (DataLink_link) REFERENCES DataLink(link) ON DELETE CASCADE
);

-- Таблица Data
CREATE TABLE Data (
    id CHAR(36) PRIMARY KEY,
    size DOUBLE,
    date DATETIME,
    dataType VARCHAR(50),
    name VARCHAR(100),
    description TEXT,
    tags TEXT,
    createdBy CHAR(36),
    FOREIGN KEY (createdBy) REFERENCES User(id) ON DELETE SET NULL
);

-- Таблица DataLink_has_Data
CREATE TABLE DataLink_has_Data (
    Data_id CHAR(36),
    DataLink_link VARCHAR(255),
    PRIMARY KEY (Data_id, DataLink_link),
    FOREIGN KEY (Data_id) REFERENCES Data(id) ON DELETE CASCADE,
    FOREIGN KEY (DataLink_link) REFERENCES DataLink(link) ON DELETE CASCADE
);

-- Таблица AdminActivityReports
CREATE TABLE AdminActivityReports (
    id CHAR(36) PRIMARY KEY,
    adminID CHAR(36),
    activity TEXT,
    date DATETIME,
    FOREIGN KEY (adminID) REFERENCES User(id) ON DELETE CASCADE
);

-- Таблица AdminRegistration
CREATE TABLE AdminRegistration (
    id CHAR(36) PRIMARY KEY,
    adminID CHAR(36),
    registeredBy CHAR(36),
    date DATETIME,
    FOREIGN KEY (adminID) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (registeredBy) REFERENCES User(id) ON DELETE SET NULL
);

-- Таблица GuestAccess
CREATE TABLE GuestAccess (
    id CHAR(36) PRIMARY KEY,
    dataID CHAR(36),
    accessDate DATETIME,
    guestID CHAR(36),
    FOREIGN KEY (dataID) REFERENCES Data(id) ON DELETE CASCADE
);

-- Таблица RemovedAdminData
CREATE TABLE RemovedAdminData (
    id CHAR(36) PRIMARY KEY,
    adminID CHAR(36),
    removedBy CHAR(36),
    dataID CHAR(36),
    date DATETIME,
    FOREIGN KEY (adminID) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (removedBy) REFERENCES User(id) ON DELETE SET NULL,
    FOREIGN KEY (dataID) REFERENCES Data(id) ON DELETE CASCADE
);

```

## RESTfull сервіс для управління даними
Підключення до бази даних
```
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'DbPassword',
    database: 'lab5',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
```
Налаштування сервера
```
const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users');
const attributesRoutes = require('./routes/attributes');
const permissionsRoutes = require('./routes/permissions');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Підключення маршрутів
app.use('/users', usersRoutes);
app.use('/attributes', attributesRoutes);
app.use('/permissions', permissionsRoutes);

app.get('/', (req, res) => {
    res.send('Lab5 REST API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

```
Маршрути для Users
```
const express = require('express');
const UsersController = require('../controllers/UsersController');
const validateUser = require('../validation/userValidation');

const router = express.Router();

router.get('/', UsersController.getAll);

router.post('/', (req, res) => {
    try {
        validateUser(req.body);
        UsersController.create(req, res);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.put('/:id', (req, res) => {
    const { password, username, email, role } = req.body;
    if (!password || !username || !email || !role) {
        return res.status(400).send('All fields (password, username, email, role) are required for update');
    }
    UsersController.update(req, res);
});

router.delete('/:id', UsersController.delete);

module.exports = router;

```
Маршрути для Attributes
```
const express = require('express');
const AttributesController = require('../controllers/AttributesController');
const validateAttribute = require('../validation/attributeValidation');

const router = express.Router();

router.get('/', AttributesController.getAll);

router.post('/', (req, res) => {
    try {
        validateAttribute(req.body);
        AttributesController.create(req, res);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.put('/:id', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).send('name is required for update');
    }
    AttributesController.update(req, res);
});

router.delete('/:id', AttributesController.delete);

module.exports = router;

```
Маршрути для Permissions
```
const express = require('express');
const PermissionsController = require('../controllers/PermissionsController');
const validatePermission = require('../validation/permissionValidation');

const router = express.Router();

router.get('/', PermissionsController.getAll);

router.post('/', (req, res) => {
    try {
        validatePermission(req.body);
        PermissionsController.create(req, res);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.put('/:id', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).send('name is required for update');
    }
    PermissionsController.update(req, res);
});

router.delete('/:id', PermissionsController.delete);

module.exports = router;

```
SQL запити для Users
```
module.exports = {
    selectAll: 'SELECT * FROM User',
    insert: 'INSERT INTO User (id, password, username, email, role) VALUES (?, ?, ?, ?, ?)',
    update: 'UPDATE User SET password = ?, username = ?, email = ?, role = ? WHERE id = ?',
    delete: 'DELETE FROM User WHERE id = ?'
};

```
SQL запити для Attributes
```
module.exports = {
    selectAll: 'SELECT * FROM Attributes',
    insert: 'INSERT INTO Attributes (id, description, value, attributeType, name) VALUES (?, ?, ?, ?, ?)',
    update: 'UPDATE Attributes SET description = ?, value = ?, attributeType = ?, name = ? WHERE id = ?',
    delete: 'DELETE FROM Attributes WHERE id = ?'
};

```
SQL запити для Permissions
```
module.exports = {
    selectAll: 'SELECT * FROM Permissions',
    insert: 'INSERT INTO Permissions (id, description, level, name) VALUES (?, ?, ?, ?)',
    update: 'UPDATE Permissions SET description = ?, level = ?, name = ? WHERE id = ?',
    delete: 'DELETE FROM Permissions WHERE id = ?'
};

```
Контролери для Users
```
const pool = require('../db');
const userSQL = require('../queries/usersQueries');

class UsersController {
    static async getAll(req, res) {
        try {
            const [rows] = await pool.query(userSQL.selectAll);
            res.json(rows);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async create(req, res) {
        try {
            const { id, password, username, email, role } = req.body;
            await pool.query(userSQL.insert, [id, password, username, email, role]);
            res.status(201).send('User created');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { password, username, email, role } = req.body;
        try {
            await pool.query(userSQL.update, [password, username, email, role, id]);
            res.send('User updated');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            await pool.query(userSQL.delete, [id]);
            res.send('User deleted');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = UsersController;

```
Контролери для Attributes
```
const pool = require('../db');
const attributeSQL = require('../queries/attributesQueries');

class AttributesController {
    static async getAll(req, res) {
        try {
            const [rows] = await pool.query(attributeSQL.selectAll);
            res.json(rows);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async create(req, res) {
        try {
            const { id, description, value, attributeType, name } = req.body;
            await pool.query(attributeSQL.insert, [id, description, value, attributeType, name]);
            res.status(201).send('Attribute created');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { description, value, attributeType, name } = req.body;
        try {
            await pool.query(attributeSQL.update, [description, value, attributeType, name, id]);
            res.send('Attribute updated');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            await pool.query(attributeSQL.delete, [id]);
            res.send('Attribute deleted');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = AttributesController;

```
Контролери для Permissions
```
const pool = require('../db');
const permissionSQL = require('../queries/permissionsQueries');

class PermissionsController {
    static async getAll(req, res) {
        try {
            const [rows] = await pool.query(permissionSQL.selectAll);
            res.json(rows);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async create(req, res) {
        try {
            const { id, description, level, name } = req.body;
            await pool.query(permissionSQL.insert, [id, description, level, name]);
            res.status(201).send('Permission created');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { description, level, name } = req.body;
        try {
            await pool.query(permissionSQL.update, [description, level, name, id]);
            res.send('Permission updated');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            await pool.query(permissionSQL.delete, [id]);
            res.send('Permission deleted');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = PermissionsController;

```
Валідатори для Users
```
module.exports = function validateUser(data) {
    const { id, password, username, email, role } = data;

    if (!id) throw new Error('id is required');
    if (!password) throw new Error('password is required');
    if (!username) throw new Error('username is required');
    if (!email) throw new Error('email is required');
    if (!role) throw new Error('role is required');
};

```
Валідатори для Attributes
```
module.exports = function validateAttribute(data) {
    const { id, name } = data;

    if (!id) throw new Error('id is required');
    if (!name) throw new Error('name is required');

};

```
Валідатори для Permissions
```
module.exports = function validatePermission(data) {
    const { id, name } = data;

    if (!id) throw new Error('id is required');
    if (!name) throw new Error('name is required');

};

```

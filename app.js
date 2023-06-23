// packages
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

// middleware handlers
const { error } = require('./utils/error');
const isAuthenticated = require('./middleware/isAuthenticated');
const isAdmin = require('./middleware/isAdmin');

// routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
const serviceRouter = require('./routes/service')

// express app
const app = express();

// middlewares
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/v1/app/auth', authRouter);
app.use('/api/v1/app/users', isAuthenticated, usersRouter);
app.use('/api/v1/admin', isAdmin, adminRouter);
app.use('/api/v1/service', serviceRouter);
app.use('/', indexRouter);

// error handler
app.use(error)

const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/resources/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "." + (ext = file.originalname.split(".").pop()))
    }
})

const upload = multer({ storage: fileStorageEngine });
// const upload2 = multer({ dest: 'uploads/' });

app.post('/uploadFile', upload.single("file"), (req, res) => {
    res.send(req.file.filename)
});

app.get('/downloadFile', function (req, res) {
    const { fileName } = req.query
    const file = `${__dirname}/public/resources/${fileName}`;
    res.download(file); // Set disposition and send it.
});

module.exports = app;
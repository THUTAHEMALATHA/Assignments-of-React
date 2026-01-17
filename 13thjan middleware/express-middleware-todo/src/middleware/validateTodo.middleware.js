function validateTodoMiddleware(req, res, next) {
    const body = req.body;
    const keys = Object.keys(body);

    if (keys.length !== 1 || !keys.includes('title') || typeof body.title !== 'string') {
        return res.status(400).json({
            error: "Invalid request body. Only 'title' is allowed"
        });
    }

    next();
}

module.exports = validateTodoMiddleware;

let requestCounts = 0;
let startTime = Date.now();

function rateLimiterMiddleware(req, res, next) {
    const now = Date.now();

    // reset count every minute
    if (now - startTime > 60 * 1000) {
        requestCounts = 0;
        startTime = now;
    }

    if (requestCounts >= 15) {
        return res.status(429).json({
            error: "Too many requests, please try again later"
        });
    }

    requestCounts++;
    next();
}

module.exports = rateLimiterMiddleware;

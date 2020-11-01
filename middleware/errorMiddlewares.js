//jshint esversion:10
exports.notFound =  (req,res,next)=>{
    const error = new Error(`${req.originalUrl} Not Found`);
    res.status(404);
    next(error);
};


exports.errorHandler =  (err,req,res,next)=>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
      msg: err.message,
      isSuccess: false,
      code: statusCode,
      stack: process.env.NODE_ENV === 'production' ? null: err.stack
    });
    next();
};


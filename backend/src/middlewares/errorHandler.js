export default function errorHandler(err, req, res, next) {
    console.log(err);
    return res.status(err.getStatus()).send(err.get());
}


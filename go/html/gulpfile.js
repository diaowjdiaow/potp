var gulp = require("gulp");
var webserver = require("gulp-webserver");
gulp.task("server", () => {
    gulp.src("./src/")
        .pipe(webserver({
            open: true,
            port: 8787,
            host: "localhost",
            livereload: true,
            proxies: [
                { source: "/find", target: "http://localhost:3000/find" },
                { source: "/insert", target: "http://localhost:3000/insert" }
            ]
        }))
})
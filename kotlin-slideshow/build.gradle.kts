plugins {
    id("io.github.turansky.kfc.application")
    id("io.github.turansky.kfc.wrappers")
}

dependencies {
    jsMainImplementation(wrappers("react"))
    jsMainImplementation(wrappers("react-dom"))

    jsMainApi(npmv("@porotkin/slide-show"))
}

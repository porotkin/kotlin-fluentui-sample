plugins {
    id("io.github.turansky.kfc.library")
    id("io.github.turansky.kfc.wrappers")

    id("io.github.turansky.seskar")
}

dependencies {
    jsMainImplementation("io.github.turansky.seskar:seskar-core:2.42.0")

    jsMainImplementation(wrappers("react-core"))
    jsMainImplementation(wrappers("react"))
    jsMainImplementation(wrappers("browser"))
    jsMainImplementation(wrappers("js"))
}

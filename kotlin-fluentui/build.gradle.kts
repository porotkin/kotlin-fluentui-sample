plugins {
    id("io.github.turansky.kfc.library")
    id("io.github.turansky.kfc.wrappers")

    id("io.github.turansky.seskar")
    id("io.github.sgrishchenko.karakum")
}

dependencies {
    jsMainImplementation("io.github.turansky.seskar:seskar-core:2.42.0")

    jsMainImplementation(wrappers("react-core"))
    jsMainImplementation(wrappers("react"))
    jsMainImplementation(wrappers("browser"))
    jsMainImplementation(wrappers("js"))
}

kotlin {
    sourceSets {
        sourceSets["jsMain"].kotlin.srcDir(projectDir.resolve("src/jsMain/generated"))
    }
}

plugins {
    id("io.github.turansky.kfc.library")
    id("io.github.turansky.kfc.wrappers")

    id("io.github.turansky.seskar")
}

val seskarVersion = extra["seskar.version"] as String

dependencies {
    jsMainImplementation(wrappers("react-core"))
    jsMainImplementation(wrappers("react"))
    jsMainImplementation(wrappers("browser"))
    jsMainImplementation(wrappers("js"))

    jsMainImplementation("io.github.turansky.seskar:seskar-core:$seskarVersion")
}

kotlin {
    sourceSets {
        sourceSets["jsMain"].kotlin.srcDir(projectDir.resolve("src/jsMain/generated"))
    }
}

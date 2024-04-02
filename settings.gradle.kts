pluginManagement {
    plugins {
        val kotlinVersion = extra["kotlin.version"] as String
        kotlin("multiplatform") version kotlinVersion

        val seskarVersion = extra["seskar.version"] as String
        id("io.github.turansky.seskar") version seskarVersion

        val karakumVersion = extra["karakum.version"] as String
        id("io.github.sgrishchenko.karakum") version karakumVersion

        val kfcVersion = extra["kfc.version"] as String
        id("io.github.turansky.kfc.application") version kfcVersion
        id("io.github.turansky.kfc.library") version kfcVersion
        id("io.github.turansky.kfc.wrappers") version kfcVersion
        id("io.github.turansky.kfc.webpack") version kfcVersion
        id("io.github.turansky.kfc.worker") version kfcVersion
    }
}

dependencyResolutionManagement {
    repositories {
        mavenCentral()
    }
}

rootProject.name = "kotlin-fluentui-sample"

include("app")
include("kotlin-fluentui")
include("kotlin-slideshow")
include("kotlin-image-generator")

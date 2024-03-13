pluginManagement {
    plugins {
        val kotlinVersion = extra["kotlin.version"] as String
        kotlin("multiplatform") version kotlinVersion

        val seskarVersion = extra["seskar.version"] as String
        id("io.github.turansky.seskar") version seskarVersion

        val kfcVersion = extra["kfc.version"] as String
        id("io.github.turansky.kfc.application") version kfcVersion
        id("io.github.turansky.kfc.library") version kfcVersion
        id("io.github.turansky.kfc.wrappers") version kfcVersion
        id("io.github.turansky.kfc.webpack") version kfcVersion
    }
}

dependencyResolutionManagement {
    repositories {
        gradlePluginPortal()
        mavenCentral()
    }
}

rootProject.name = "kotlin-fluentui-sample"

include("app")
include("kotlin-fluentui")

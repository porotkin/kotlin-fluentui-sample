pluginManagement {
    plugins {
        val kotlinVersion = extra["kotlin.version"] as String
        kotlin("multiplatform") version kotlinVersion
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

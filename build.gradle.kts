plugins {
    kotlin("multiplatform")
    id("io.github.turansky.kfc.application")
}

tasks.wrapper {
    gradleVersion = "8.6"
}
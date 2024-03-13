plugins {
    kotlin("multiplatform")
}

kotlin {
    js().browser()
}

tasks.wrapper {
    gradleVersion = "8.6"
}
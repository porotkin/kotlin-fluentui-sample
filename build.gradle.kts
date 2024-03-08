plugins {
    kotlin("multiplatform")
}

kotlin {
    js {
        useEsModules()
        browser {
            commonWebpackConfig {
                outputFileName = "index.js"
            }
        }
        binaries.executable()
    }

    sourceSets {
        val jsMain by getting {
            dependencies {
                implementation(project("app"))
            }
        }
    }
}

tasks.wrapper {
    gradleVersion = "8.6"
}
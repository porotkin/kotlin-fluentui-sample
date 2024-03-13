plugins {
    kotlin("multiplatform")

    id("io.github.turansky.kfc.webpack")
}

kotlin {
    js().browser()
}

tasks {
    wrapper {
        gradleVersion = "8.6"
    }
    patchWebpackConfig {
        patch(
            """
            config.devServer.historyApiFallback = true
        """.trimIndent()
        )
    }
}
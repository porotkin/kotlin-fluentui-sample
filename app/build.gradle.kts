import org.jetbrains.kotlin.gradle.targets.js.dsl.ExperimentalDistributionDsl

plugins {
    id("io.github.turansky.kfc.application")
    id("io.github.turansky.kfc.wrappers")
    id("io.github.turansky.kfc.webpack")
}

val coroutinesVersion = project.property("kotlinx-coroutines.version") as String

dependencies {
    jsMainImplementation(wrappers("react"))
    jsMainImplementation(wrappers("react-dom"))
    jsMainImplementation(wrappers("react-router"))
    jsMainImplementation(wrappers("react-router-dom"))
    jsMainImplementation(wrappers("emotion"))
    jsMainImplementation(wrappers("tanstack-react-query"))
    jsMainImplementation(wrappers("tanstack-react-table"))

    jsMainImplementation("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:$coroutinesVersion")

    jsMainApi(npmv("@fluentui/react-components"))
    jsMainApi(npmv("buffer"))

    jsMainApi(project(":kotlin-fluentui"))
    jsMainApi(project(":kotlin-slideshow"))

    jsMainApi(project(":kotlin-image-generator"))
}

kotlin {
    js(IR) {
        browser {
            @OptIn(ExperimentalDistributionDsl::class)
            distribution {
                outputDirectory.set(rootDir.resolve("build/dist"))
            }
        }
        binaries.executable()
    }
}

tasks {
    patchWebpackConfig {
        patch(
            """
            if (config.devServer) {
                config.devServer.historyApiFallback = true
            }
            config.output.path = '${project.rootDir.path + "/build/dist"}'
            config.output.clean = false
            
            config.resolve.fallback = {buffer: require.resolve('buffer')}
            const webpack = require('webpack')
            config.plugins.push(
                new webpack.ProvidePlugin({
                    Buffer: ['buffer', 'Buffer'],
                }),   
            )
        """
        )
    }
}

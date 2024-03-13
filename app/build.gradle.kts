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
    jsMainApi(project(":kotlin-fluentui"))
}

tasks {
    patchWebpackConfig {
        patch(
            """
            config.devServer = {
                historyApiFallback: true
            }
        """
        )
    }
}

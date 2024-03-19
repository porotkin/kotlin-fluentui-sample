plugins {
    id("io.github.sgrishchenko.karakum")

    id("io.github.turansky.kfc.worker")
    id("io.github.turansky.kfc.wrappers")
}

val coroutinesVersion = project.property("kotlinx-coroutines.version") as String

dependencies {
    jsMainImplementation(wrappers("react"))
    jsMainImplementation(wrappers("react-dom"))

    jsMainImplementation("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:$coroutinesVersion")

    jsMainApi(npmv("js-image-generator"))
}

import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.7.5"
	id("io.spring.dependency-management") version "1.0.15.RELEASE"
	kotlin("jvm") version "1.6.21"
	kotlin("plugin.spring") version "1.6.21"
}

group = "home.helper.api"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17

repositories {
	mavenCentral()
}

dependencies {
	// Sprint Web
	implementation("org.springframework.boot:spring-boot-starter-web")
	// Spring GraphQL
	implementation("org.springframework.boot:spring-boot-starter-graphql")
	// Kotlin
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
	// MyBatis
	implementation("org.mybatis.dynamic-sql:mybatis-dynamic-sql:1.4.0")
	implementation("org.mybatis.spring.boot:mybatis-spring-boot-starter:2.2.2")

	developmentOnly("org.springframework.boot:spring-boot-devtools")
	// MySQL
	runtimeOnly("com.mysql:mysql-connector-j")

	testImplementation("org.springframework.boot:spring-boot-starter-test")
	testImplementation("org.springframework:spring-webflux")
	testImplementation("org.springframework.graphql:spring-graphql-test")
	testImplementation("org.mybatis.spring.boot:mybatis-spring-boot-starter-test:2.2.2")
	testImplementation("com.github.springtestdbunit:spring-test-dbunit:1.3.0")
	testImplementation("org.dbunit:dbunit:2.7.3")

	// Mockito
	testImplementation("com.nhaarman.mockitokotlin2:mockito-kotlin:2.2.0")

	implementation(project(":home-helper-core"))
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "17"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}


val mybatisMapperVersion = "4.1.5"
val mybatisGeneratorVersion = "1.4.0"
val mysqlConnectorJavaVersion = "8.0.22"

val mybatisGenerator by configurations.creating

dependencies {
	mybatisGenerator(
		group = "org.mybatis.generator",
		name = "mybatis-generator-core",
		version = mybatisGeneratorVersion
	)
	mybatisGenerator(
		group = "mysql",
		name = "mysql-connector-java",
		version = mysqlConnectorJavaVersion
	)
	mybatisGenerator(
		group = "tk.mybatis",
		name = "mapper",
		version = mybatisMapperVersion
	)
}
task("mybatisGenerator") {
	doLast {
		ant.withGroovyBuilder {
			"taskdef"(
				"name" to "mbgenerator",
				"classname" to "org.mybatis.generator.ant.GeneratorAntTask",
				"classpath" to mybatisGenerator.asPath
			)
		}
		ant.withGroovyBuilder {
			"mbgenerator"(
				"overwrite" to true, "configfile" to
						"src/main/resources/mbg-config.xml", "verbose" to true
			)
		}
	}
}
/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.api.provider.message

import home.helper.core.domain.model.message.HomeHelperMessage
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.dto.save.SaveOutput
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
internal class SaveMessageProviderTest(
    @Autowired
    private val customMessageSource: CustomMessageSource,
) {
    private var target: SaveMessageProvider? = null

    @BeforeEach
    internal fun setUp() {
        target = SaveMessageProvider(customMessageSource)
    }

    @Test
    fun getMessage() {
        val actual = SaveUseCaseEnum.values().map {
            target?.getMessage(
                SaveOutput(
                    result = 3,
                    useCase = it,
                )
            )
        }
        val expected = arrayListOf(
            HomeHelperMessage("お手伝いポイントを3件 獲得したよ!"),
            HomeHelperMessage("お手伝い項目を3件 登録したよ!"),
        )

        assertThat(actual, `is`(expected))

    }

    @Test
    fun buildKey() {
        val key = SaveOutput(
            result = 3,
            useCase = SaveUseCaseEnum.REGISTER_HELP_POINT,
        )
        val actual = target?.buildKey(key)
        val expected = "message.use.case.register.help.point"

        assertThat(actual, `is`(expected))
    }
}
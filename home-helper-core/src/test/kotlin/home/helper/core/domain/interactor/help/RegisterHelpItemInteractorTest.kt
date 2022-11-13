/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.help

import com.nhaarman.mockitokotlin2.mock
import home.helper.core.domain.model.help.HelpPoint
import home.helper.core.domain.model.message.HomeHelperMessage
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.dto.RegisterOutput
import home.helper.core.dto.help.RegisterHelpItemInput
import home.helper.core.dto.help.RegisterHelpItemOutput
import home.helper.core.dto.save.SaveOutput
import home.helper.core.gateway.SaveDefaultGateway
import home.helper.core.gateway.message.SaveMessageGateway
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito.`when`

internal class RegisterHelpItemInteractorTest {
    private val registerHelpItemSaveGateway: SaveDefaultGateway<RegisterHelpItemOutput> = mock()
    private val saveMessageGateway: SaveMessageGateway = mock()

    private val target = RegisterHelpItemInteractor(
        registerHelpItemSaveGateway = registerHelpItemSaveGateway,
        saveMessageGateway = saveMessageGateway,
    )

    @BeforeEach
    internal fun setUp() {
        `when`(
            registerHelpItemSaveGateway.save(
                RegisterHelpItemOutput(
                    helpItemName = "項目1",
                    helpPoint = HelpPoint(100),
                    memo = "メモ\nメモ"
                )
            )
        ).thenReturn(
            SaveOutput(
                result = 1,
                useCase = SaveUseCaseEnum.REGISTER_HELP_ITEM,
            )
        )

        `when`(
            saveMessageGateway.getMessage(
                SaveOutput(
                    result = 1,
                    useCase = SaveUseCaseEnum.REGISTER_HELP_ITEM,
                )
            )
        )
            .thenReturn(HomeHelperMessage("お手伝い項目を1件追加しました。"))
    }

    @Test
    fun register() {
        val source = RegisterHelpItemInput(
            helpItemName = "項目1",
            helpPoint = HelpPoint(100),
            memo = "メモ\nメモ"
        )
        val actual = target.register(source)
        val expected = RegisterOutput(
            HomeHelperMessage("お手伝い項目を1件追加しました。"),
        )

        assertThat(actual, `is`(expected))
    }
}
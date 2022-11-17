/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.help_item

import com.nhaarman.mockitokotlin2.mock
import home.helper.core.domain.model.help_point.HelpPoint
import home.helper.core.domain.model.message.HomeHelperMessage
import home.helper.core.domain.model.save.SaveUseCaseEnum
import home.helper.core.dto.RegisterOutput
import home.helper.core.dto.help_item.RegisterHelpItemInput
import home.helper.core.dto.help_item.RegisterHelpItemOutput
import home.helper.core.dto.save.SaveOutput
import home.helper.core.gateway.SaveDefaultGateway
import home.helper.core.gateway.message.SaveMessageGateway
import org.hamcrest.CoreMatchers
import org.hamcrest.MatcherAssert
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito

internal class RegisterHelpItemInteractorTest {
    private val registerHelpItemSaveGateway: SaveDefaultGateway<RegisterHelpItemOutput> = mock()
    private val saveMessageGateway: SaveMessageGateway = mock()

    private val target = RegisterHelpItemInteractor(
        registerHelpItemSaveGateway = registerHelpItemSaveGateway,
        saveMessageGateway = saveMessageGateway,
    )

    @BeforeEach
    internal fun setUp() {
        Mockito.`when`(
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

        Mockito.`when`(
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

        MatcherAssert.assertThat(actual, CoreMatchers.`is`(expected))
    }
}
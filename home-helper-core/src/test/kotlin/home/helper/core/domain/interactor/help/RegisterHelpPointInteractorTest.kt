/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.help

import com.nhaarman.mockitokotlin2.mock
import home.helper.core.domain.model.help.HelpItem
import home.helper.core.domain.model.help.HelpPoint
import home.helper.core.dto.RegisterOutput
import home.helper.core.dto.help.RegisterHelpPointInput
import home.helper.core.dto.help.RegisterHelpPointOutput
import home.helper.core.dto.save.SaveOutput
import home.helper.core.gateway.SaveDefaultGateway
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito.`when`

internal class RegisterHelpPointInteractorTest {

    private val saveGateway: SaveDefaultGateway<RegisterHelpPointOutput> = mock()

    private val target: RegisterHelpPointInteractor = RegisterHelpPointInteractor(
        helpPointSaveGateway = saveGateway
    )

    @Test
    fun register() {
        val actual = target.register(
            RegisterHelpPointInput(
                helpItemList = listOf(
                    HelpItem("項目1", 100),
                    HelpItem("項目2", 200),
                    HelpItem("項目3", 300),
                )
            )
        )
        assertThat(actual, `is`(RegisterOutput()))
    }

    @BeforeEach
    internal fun setUp() {
        `when`(
            saveGateway.save(
                RegisterHelpPointOutput(
                    helpItemList = listOf(
                        HelpItem("項目1", 100),
                        HelpItem("項目2", 200),
                        HelpItem("項目3", 300),
                    ),
                    totalHelpPoint = HelpPoint(600),
                )
            )
        )
            .thenReturn(
                SaveOutput(
                    result = 1
                )
            )

    }

}
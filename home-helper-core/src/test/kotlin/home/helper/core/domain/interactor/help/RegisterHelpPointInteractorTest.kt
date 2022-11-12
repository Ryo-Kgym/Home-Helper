/*
 * Copyright (c) 2022 Ryo-Kgym.
 */

package home.helper.core.domain.interactor.help

import com.nhaarman.mockitokotlin2.mock
import home.helper.core.domain.model.help.HelpItem
import home.helper.core.domain.model.help.HelpPoint
import home.helper.core.domain.model.operation.Operation
import home.helper.core.domain.model.user.UserId
import home.helper.core.dto.RegisterOutput
import home.helper.core.dto.help.RegisterHelpPointInput
import home.helper.core.dto.help.RegisterHelpPointOutput
import home.helper.core.dto.save.SaveOutput
import home.helper.core.gateway.SaveDefaultGateway
import home.helper.core.gateway.operation.OperationGateway
import org.hamcrest.CoreMatchers.`is`
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.mockito.Mockito.`when`
import java.time.LocalDate

internal class RegisterHelpPointInteractorTest {

    private val saveGateway: SaveDefaultGateway<RegisterHelpPointOutput> = mock()
    private val operationGateway: OperationGateway = mock()

    private val target: RegisterHelpPointInteractor = RegisterHelpPointInteractor(
        helpPointSaveGateway = saveGateway,
        operationGateway = operationGateway,
    )

    @Test
    fun register() {
        val actual = target.register(
            RegisterHelpPointInput(
                helpItemList = listOf(
                    HelpItem(1, "項目1", 100),
                    HelpItem(2, "項目2", 200),
                    HelpItem(3, "項目3", 300),
                ),
                userId = UserId(1),
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
                        HelpItem(1, "項目1", 100),
                        HelpItem(2, "項目2", 200),
                        HelpItem(3, "項目3", 300),
                    ),
                    totalHelpPoint = HelpPoint(600),
                    userId = UserId(1),
                    earnedDate = LocalDate.of(2022, 11, 12),
                )
            )
        )
            .thenReturn(
                SaveOutput(
                    result = 1
                )
            )

        `when`(operationGateway.load())
            .thenReturn(Operation(1, LocalDate.of(2022, 11, 12)))

    }

}
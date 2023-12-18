/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.imports;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.gateway.NoArgsSaveGateway;
import home.helper.batch.persistence.database.v1.table.DbV1AccountExample;
import home.helper.batch.persistence.database.v1.table.DbV1AccountMapper;
import home.helper.batch.persistence.database.v1.table.DbV1AffiliationExample;
import home.helper.batch.persistence.database.v1.table.DbV1AffiliationMapper;
import home.helper.batch.persistence.database.v1.table.DbV1ApplicationExample;
import home.helper.batch.persistence.database.v1.table.DbV1ApplicationMapper;
import home.helper.batch.persistence.database.v1.table.DbV1CategoryExample;
import home.helper.batch.persistence.database.v1.table.DbV1CategoryMapper;
import home.helper.batch.persistence.database.v1.table.DbV1CreditCardDetailExample;
import home.helper.batch.persistence.database.v1.table.DbV1CreditCardDetailMapper;
import home.helper.batch.persistence.database.v1.table.DbV1CreditCardSummaryExample;
import home.helper.batch.persistence.database.v1.table.DbV1CreditCardSummaryMapper;
import home.helper.batch.persistence.database.v1.table.DbV1DailyDetailExample;
import home.helper.batch.persistence.database.v1.table.DbV1DailyDetailMapper;
import home.helper.batch.persistence.database.v1.table.DbV1DepositCategoryExample;
import home.helper.batch.persistence.database.v1.table.DbV1DepositCategoryMapper;
import home.helper.batch.persistence.database.v1.table.DbV1GenreExample;
import home.helper.batch.persistence.database.v1.table.DbV1GenreMapper;
import home.helper.batch.persistence.database.v1.table.DbV1GroupApplicationExample;
import home.helper.batch.persistence.database.v1.table.DbV1GroupApplicationMapper;
import home.helper.batch.persistence.database.v1.table.DbV1GroupExample;
import home.helper.batch.persistence.database.v1.table.DbV1GroupMapper;
import home.helper.batch.persistence.database.v1.table.DbV1GroupRoleExample;
import home.helper.batch.persistence.database.v1.table.DbV1GroupRoleMapper;
import home.helper.batch.persistence.database.v1.table.DbV1ImportFileHistoryExample;
import home.helper.batch.persistence.database.v1.table.DbV1ImportFileHistoryMapper;
import home.helper.batch.persistence.database.v1.table.DbV1SummaryCategoryByGroupExample;
import home.helper.batch.persistence.database.v1.table.DbV1SummaryCategoryByGroupMapper;
import home.helper.batch.persistence.database.v1.table.DbV1TransferCategoryExample;
import home.helper.batch.persistence.database.v1.table.DbV1TransferCategoryMapper;
import home.helper.batch.persistence.database.v1.table.DbV1UserExample;
import home.helper.batch.persistence.database.v1.table.DbV1UserMapper;

@Repository
@RequiredArgsConstructor
public class ImportMigrationDestinationDeleteRepository implements NoArgsSaveGateway {
    private final DbV1CreditCardDetailMapper dbV1CreditCardDetailMapper;
    private final DbV1CreditCardSummaryMapper dbV1CreditCardSummaryMapper;
    private final DbV1ImportFileHistoryMapper dbV1ImportFileHistoryMapper;
    private final DbV1DailyDetailMapper dbV1DailyDetailMapper;

    private final DbV1AccountMapper dbV1AccountMapper;
    private final DbV1DepositCategoryMapper dbV1DepositCategoryMapper;
    private final DbV1TransferCategoryMapper dbV1TransferCategoryMapper;
    private final DbV1SummaryCategoryByGroupMapper dbV1SummaryCategoryByGroupMapper;
    private final DbV1CategoryMapper dbV1CategoryMapper;
    private final DbV1GenreMapper dbV1GenreMapper;
    private final DbV1UserMapper dbV1UserMapper;
    private final DbV1GroupMapper dbV1GroupMapper;
    private final DbV1AffiliationMapper dbV1AffiliationMapper;
    private final DbV1GroupRoleMapper dbV1GroupRoleMapper;
    private final DbV1ApplicationMapper dbV1ApplicationMapper;
    private final DbV1GroupApplicationMapper dbV1GroupApplicationMapper;

    @Override
    public void save() {
        dbV1CreditCardDetailMapper.deleteByExample(new DbV1CreditCardDetailExample());
        dbV1CreditCardSummaryMapper.deleteByExample(new DbV1CreditCardSummaryExample());
        dbV1ImportFileHistoryMapper.deleteByExample(new DbV1ImportFileHistoryExample());
        dbV1DailyDetailMapper.deleteByExample(new DbV1DailyDetailExample());

        dbV1AccountMapper.deleteByExample(new DbV1AccountExample());
        dbV1SummaryCategoryByGroupMapper.deleteByExample(new DbV1SummaryCategoryByGroupExample());
        dbV1DepositCategoryMapper.deleteByExample(new DbV1DepositCategoryExample());
        dbV1TransferCategoryMapper.deleteByExample(new DbV1TransferCategoryExample());
        dbV1CategoryMapper.deleteByExample(new DbV1CategoryExample());
        dbV1GenreMapper.deleteByExample(new DbV1GenreExample());
        dbV1GroupApplicationMapper.deleteByExample(new DbV1GroupApplicationExample());
        dbV1ApplicationMapper.deleteByExample(new DbV1ApplicationExample());
        dbV1AffiliationMapper.deleteByExample(new DbV1AffiliationExample());
        dbV1GroupRoleMapper.deleteByExample(new DbV1GroupRoleExample());
        dbV1UserMapper.deleteByExample(new DbV1UserExample());
        dbV1GroupMapper.deleteByExample(new DbV1GroupExample());
    }
}

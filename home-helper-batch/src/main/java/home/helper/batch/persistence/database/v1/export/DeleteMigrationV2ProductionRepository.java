/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

package home.helper.batch.persistence.database.v1.export;

import org.springframework.stereotype.Repository;
import lombok.RequiredArgsConstructor;

import home.helper.batch.gateway.NoArgsSaveGateway;
import home.helper.batch.persistence.database.v2.table.DbV2AccountMapper;
import home.helper.batch.persistence.database.v2.table.DbV2AffiliationExample;
import home.helper.batch.persistence.database.v2.table.DbV2AffiliationMapper;
import home.helper.batch.persistence.database.v2.table.DbV2ApplicationExample;
import home.helper.batch.persistence.database.v2.table.DbV2ApplicationMapper;
import home.helper.batch.persistence.database.v2.table.DbV2CategoryMapper;
import home.helper.batch.persistence.database.v2.table.DbV2CreditCardDetailMapper;
import home.helper.batch.persistence.database.v2.table.DbV2CreditCardSummaryMapper;
import home.helper.batch.persistence.database.v2.table.DbV2DailyDetailMapper;
import home.helper.batch.persistence.database.v2.table.DbV2DepositCategoryMapper;
import home.helper.batch.persistence.database.v2.table.DbV2ExchangeItemMapper;
import home.helper.batch.persistence.database.v2.table.DbV2GenreMapper;
import home.helper.batch.persistence.database.v2.table.DbV2GroupApplicationExample;
import home.helper.batch.persistence.database.v2.table.DbV2GroupApplicationMapper;
import home.helper.batch.persistence.database.v2.table.DbV2GroupExample;
import home.helper.batch.persistence.database.v2.table.DbV2GroupMapper;
import home.helper.batch.persistence.database.v2.table.DbV2HelpItemMapper;
import home.helper.batch.persistence.database.v2.table.DbV2HelpPointEarnedAchievementMapper;
import home.helper.batch.persistence.database.v2.table.DbV2HelpPointEarnedDetailMapper;
import home.helper.batch.persistence.database.v2.table.DbV2HelpPointExchangedAchievementMapper;
import home.helper.batch.persistence.database.v2.table.DbV2HelperKidMapper;
import home.helper.batch.persistence.database.v2.table.DbV2HelperKidParentMapper;
import home.helper.batch.persistence.database.v2.table.DbV2ImportFileHistoryMapper;
import home.helper.batch.persistence.database.v2.table.DbV2SummaryCategoryMapper;
import home.helper.batch.persistence.database.v2.table.DbV2TransferCategoryMapper;
import home.helper.batch.persistence.database.v2.table.DbV2UserExample;
import home.helper.batch.persistence.database.v2.table.DbV2UserMapper;

@Repository
@RequiredArgsConstructor
public class DeleteMigrationV2ProductionRepository implements NoArgsSaveGateway {
    private final DbV2HelpPointExchangedAchievementMapper dbV2HelperPointExchangedAchievementMapper;
    private final DbV2HelpPointEarnedDetailMapper dbV2HelperPointEarnedDetailMapper;
    private final DbV2HelpPointEarnedAchievementMapper dbV2HelperPointEarnedAchievementMapper;
    private final DbV2HelperKidParentMapper dbV2HelperKidParentMapper;
    private final DbV2HelperKidMapper dbV2HelperKidMapper;
    private final DbV2HelpItemMapper dbV2HelperItemMapper;
    private final DbV2ExchangeItemMapper dbV2ExchangeItemMapper;

    private final DbV2CreditCardDetailMapper dbV2CreditCardDetailMapper;
    private final DbV2CreditCardSummaryMapper dbV2CreditCardSummaryMapper;
    private final DbV2ImportFileHistoryMapper dbV2ImportFileHistoryMapper;
    private final DbV2DailyDetailMapper dbV2DailyDetailMapper;

    private final DbV2AccountMapper dbV2AccountMapper;
    private final DbV2DepositCategoryMapper dbV2DepositCategoryMapper;
    private final DbV2TransferCategoryMapper dbV2TransferCategoryMapper;
    private final DbV2SummaryCategoryMapper dbV2SummaryCategoryByGroupMapper;
    private final DbV2CategoryMapper dbV2CategoryMapper;
    private final DbV2GenreMapper dbV2GenreMapper;

    private final DbV2GroupApplicationMapper dbV2GroupApplicationMapper;
    private final DbV2ApplicationMapper dbV2ApplicationMapper;
    private final DbV2AffiliationMapper dbV2AffiliationMapper;
    private final DbV2GroupMapper dbV2GroupMapper;
    private final DbV2UserMapper dbV2UserMapper;

    @Override
    public void save() {
//        dbV2HelperPointExchangedAchievementMapper.deleteByExample(new DbV2HelpPointExchangedAchievementExample());
//        dbV2HelperPointEarnedDetailMapper.deleteByExample(new DbV2HelpPointEarnedDetailExample());
//        dbV2HelperPointEarnedAchievementMapper.deleteByExample(new DbV2HelpPointEarnedAchievementExample());
//        dbV2HelperKidParentMapper.deleteByExample(new DbV2HelperKidParentExample());
//        dbV2HelperKidMapper.deleteByExample(new DbV2HelperKidExample());
//        dbV2HelperItemMapper.deleteByExample(new DbV2HelpItemExample());
//        dbV2ExchangeItemMapper.deleteByExample(new DbV2ExchangeItemExample());
//
//        dbV2CreditCardDetailMapper.deleteByExample(new DbV2CreditCardDetailExample());
//        dbV2CreditCardSummaryMapper.deleteByExample(new DbV2CreditCardSummaryExample());
//        dbV2ImportFileHistoryMapper.deleteByExample(new DbV2ImportFileHistoryExample());
//        dbV2DailyDetailMapper.deleteByExample(new DbV2DailyDetailExample());
//
//        dbV2AccountMapper.deleteByExample(new DbV2AccountExample());
//        dbV2SummaryCategoryByGroupMapper.deleteByExample(new DbV2SummaryCategoryExample());
//        dbV2DepositCategoryMapper.deleteByExample(new DbV2DepositCategoryExample());
//        dbV2TransferCategoryMapper.deleteByExample(new DbV2TransferCategoryExample());
//        dbV2CategoryMapper.deleteByExample(new DbV2CategoryExample());
//        dbV2GenreMapper.deleteByExample(new DbV2GenreExample());

        dbV2GroupApplicationMapper.deleteByExample(new DbV2GroupApplicationExample());
        dbV2ApplicationMapper.deleteByExample(new DbV2ApplicationExample());
        dbV2AffiliationMapper.deleteByExample(new DbV2AffiliationExample());
        dbV2GroupMapper.deleteByExample(new DbV2GroupExample());
        dbV2UserMapper.deleteByExample(new DbV2UserExample());
    }
}

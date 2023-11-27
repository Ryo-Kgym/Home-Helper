DROP VIEW IF EXISTS all_detail_view;
CREATE VIEW all_detail_view AS
SELECT dd.id,
       'daily'                                                            as type,
       dd.date,
       dd.genre_id,
       dd.iocome_type,
       dd.category_id,
       dd.account_id,
       dd.amount                                                          as original_amount,
       case when dd.iocome_type = 'INCOME' then 1 else -1 end * dd.amount as signed_amount,
       dd.memo
FROM daily_detail dd
UNION ALL
SELECT cd.id,
       'credit_card'                                                      as type,
       cd.date,
       cd.genre_id,
       cd.iocome_type,
       cd.category_id,
       cs.account_id,
       cd.amount                                                          as original_amount,
       case when cd.iocome_type = 'INCOME' then 1 else -1 end * cd.amount as signed_amount,
       cd.memo
FROM credit_card_detail cd
         inner join credit_card_summary cs on cd.summary_id = cs.id
order by date;

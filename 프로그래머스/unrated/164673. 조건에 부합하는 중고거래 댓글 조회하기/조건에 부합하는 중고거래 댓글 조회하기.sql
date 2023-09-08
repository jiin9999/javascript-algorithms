SELECT 
    B.TITLE, 
    B.BOARD_ID, 
    R.REPLY_ID, 
    R.WRITER_ID, 
    R.CONTENTS, 
    DATE_FORMAT(R.CREATED_DATE, '%Y-%m-%d') AS FORMATTED_CREATED_DATE
FROM 
    USED_GOODS_BOARD AS B
JOIN 
    USED_GOODS_REPLY AS R
ON 
    B.BOARD_ID = R.BOARD_ID
WHERE 
    MONTH(B.CREATED_DATE) = 10 AND YEAR(B.CREATED_DATE) = 2022
ORDER BY 
    R.CREATED_DATE, 
    B.TITLE;
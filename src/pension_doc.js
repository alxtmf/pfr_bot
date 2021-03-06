const pensionDocs = {
    "infoMessageList": {
        "InfoMessage": [
        {
            "Name": "Страх. пенсия по старости",
            "Code": "1",
            "Message": "Право на назначение пенсии имеют мужчины от 60 лет,"
            +"женщины от 55 лет при условии, что страховой стаж составляет не менее 8 лет, ИПК."
            +    "Перечень необходимых документов:"
            +"\n• паспорт;"
            +"\n• СНИЛС;"
            +"\n• cведения о стаже и заработке (трудовая книжка, справка о заработной плате за любые 5 лет подряд до 2000"
            +    "года (силовые структуры до 2002 года);"
            +"\n• военный билет (при наличии);"
            +"\n• документы об образовании (диплом);"
            +"\n• свидетельство о браке;"
            +"\n• свидетельство о рождении детей"
            +"При необходимости: справка о нахождении детей на иждивении, справка с места учебы, подтверждающая очную"
            +    "форму обучения."
},
    {
        "Name": "Страх. пенсия родителям детей-инвалидов",
        "Code": "2",
        "Message": "Перечень необходимых документов:"
            +"\n• паспорт;"
            +"\n• СНИЛС;"
            +"\n• сведения о стаже и заработке (трудовая книжка, справка о заработной плате за любые 5 лет подряд до 2000"
    +"года (силовые структуры до 2002 года);"
            +"\n• военный билет (при наличии);"
            +"\n• документы об образовании (диплом);"
            +"\n• свидетельство о рождении;"
            +"\n• свидетельство о браке;"
            +"\n• справка МСЭ на ребенка-инвалида;"
            +"\n• справка органов местного самоуправления, подтверждающая факт воспитания ребенка до 8-летнего возраста."
        +"При необходимости: справка о нахождении детей на иждивении, справка с места учебы, подтверждающая очную"
        +"форму обучения, документ, удостоверяющий личность и полномочия законного представителя (усыновителя,"
        +"опекуна, попечителя)."
    },
    {
        "Name": "Страх. пенсия матерям, имеющим 5 детей и более",
        "Code": "3",
        "Message": "Перечень необходимых документов:"
            +"\n• паспорт;"
            +"\n• СНИЛС;"
            +"\n• ведения о стаже и заработке (трудовая книжка, справка о заработной плате за любые 5 лет подряд до 2000"
        +"года (силовые структуры до 2002 года);"
            +"\n• военный билет (при наличии);"
            +"\n• документы об образовании (диплом);"
            +"\n• свидетельства о рождении детей;"
            +"\n• справка органов местного самоуправления, подтверждающая факт воспитания детей до 8-летнего возраста."
        +"При необходимости: справка о нахождении детей на иждивении, справка с места учебы, подтверждающая очную форму обучения"
    },
    {
        "Name": "Страх. пенсия по СПК вдове, вдовцу",
        "Code": "4",
        "Message": "Имеют право супруги, состоявшие в браке на момент смерти кормильца, либо неработающие и осуществляющие"
        +"уход за детьми до 14 лет, при наличии страхового стажа у умершего кормильца."
        +"Перечень необходимых документов:"
        +"\n• паспорт;"
            +"\n• свидетельство о смерти;"
            +"\n• свидетельство о браке;"
            +"\n• свидетельство о рождении ребенка;"
            +"\n• сведения о стаже и заработке (трудовая книжка умершего и заявителя, справка о заработной плате за любые 5"
        +"лет подряд до 2000 года);"
            +"\n• военный билет (при наличии)."
    },
    {
        "Name": "Страх. пенсия по СПК на детей",
        "Code": "5",
        "Message": "Имеют право: дети умершего кормильца, не достигшие возраста 18 лет, либо до 23 лет, обучающиеся по"
        +"очной форме обучения, при наличии у умершего кормильца страхового стажа."
        +"Перечень необходимых документов:"
        +"\n• паспорт ребенка (документ, удостоверяющий личность и полномочия законного представителя (усыновителя,"
        +"опекуна, попечителя);"
            +"\n• свидетельство о рождении ребенка (свидетельство об усыновлении);"
            +"\n• свидетельство о смерти;"
            +"\n• сведения о стаже и заработке (трудовая книжка умершего, справка о заработной плате за любые 5 лет подряд"
        +"до 2000 года);"
            +"\n• военный билет (при наличии)."
        +"При необходимости: справка о нахождении ребенка на иждивении, справка с места учебы, подтверждающая очную"
        +"форму обучения."
    },
    {
        "Name": "Страх. пенсия пенсионерам силовых структур",
        "Code": "6",
        "Message": "Имеют право: пенсионеры силовых структур при наличии стажа не менее 7 лет, ИПК не менее 9 баллов при"
        +"достижении пенсионного возраста."
        +"Перечень необходимых документов:"
        +"\n• паспорт;"
            +"\n• СНИЛС;"
            +"\n• военный билет;"
            +"\n• сведения о стаже и заработке (трудовая книжка, справка о заработной плате за любые 5 лет подряд до 2002"
        +"года);"
            +"\n• справка о факте назначения пенсии за выслугу лет, выданная органом, осуществляющим пенсионное обеспечение"
        +"по линии силового ведомства;"
            +"\n• свидетельство о рождении детей;"
        +"При необходимости: справка с места учебы об очном обучении"
    },
    {
        "Name": "Соц. пенсия по СПК на детей",
        "Code": "7",
        "Message": "Перечень необходимых документов:"
            +"\n• паспорт ребенка (документ, удостоверяющий личность и полномочия законного представителя (усыновителя,"
        +"опекуна, попечителя);"
            +"\n• свидетельство о смерти;"
            +"\n• документы, подтверждающие родственные отношения с умершим кормильцем (свидетельство о рождении,"
        +"свидетельство об усыновлении)."

        +"При необходимости: справка о нахождении ребенка на иждивении, справка с места учебы, подтверждающая очную"
        +"форму обучения, свидетельство о регистрации ребенка по месту жительства."
    },
    {
        "Name": "Смена способа доставки пенсии",
        "Code": "8",
        "Message": "Перечень необходимых документов:"
            +"\n• паспорт;"
            +"\n• выписка об открытии лицевого счета в случае выбора способа доставки путем передачи через кредитное"
        +"учреждение."
    },
    {
        "Name": "Пособие на погребение",
        "Code": "9",
        "Message": "Перечень необходимых документов:"
            +"\n• паспорт;"
            +"\n• свидетельство о смерти;"
            +"\n• документ, подтверждающий родственные отношения с умершим (свидетельство о рождении ребенка, свидетельство"
        +"о браке)"
    +"\n• документ, подтверждающий совместное проживание с пенсионером на день смерти (паспорт с пропиской по одному"
        +"адресу с умершим, справка жилищных органов или органов местного самоуправления)"
    }
]
}
}
module.exports.pensionDocs = pensionDocs;
const dayplanner = parseInt(prompt('Введите день недели (1-7):'));

switch (dayplanner){
    case 1 :
        alert(`${dayplanner} - на понедельник у вас обучение JS, в 19.00`);
        break;
    case 2 :
        alert(`${dayplanner} - во вторник у вас конспектирование изученного в понедельник`);
        break;
    case 3 :
        alert(`${dayplanner} - в среду и еще раз урок JS в 19.00`);
        break;
    case 4 :
        alert(`${dayplanner} - четверг, подготовка к пятнице!`);
        break;
    case 5 :
        alert(`${dayplanner} - урааа, мы дотянули до пятницы, планы на вечер: встреча с друзьями`);
        break;
    case 6 : 
        alert(`${dayplanner} - суббота, отсыхаем после пятницы`);
        break;
    case 7 :
        alert(`${dayplanner} - воскресенье, восстаем и готовимся к понедельнику`);
        break;
    default :
        alert(`Таких дней не существует, попробуйте еще раз.`);
        break;
};
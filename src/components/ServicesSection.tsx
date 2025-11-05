import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Комплексное решение любых задач с недвижимостью</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Icon name="Home" size={40} className="text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Покупка недвижимости</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Подбор объектов по вашим критериям, организация просмотров, проверка документов, сопровождение сделки.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Анализ рынка и оценка стоимости</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Торг с продавцом</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Юридическое сопровождение</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Icon name="DollarSign" size={40} className="text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Продажа недвижимости</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Оценка объекта, профессиональная фотосъёмка, размещение на всех площадках, показы покупателям.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Маркетинг и продвижение</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Квалификация покупателей</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Безопасная сделка</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Icon name="KeyRound" size={40} className="text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Аренда жилья</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Поиск и подбор квартир в аренду, проверка собственников, составление договора, помощь с заселением.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>База проверенных объектов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Юридически верный договор</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Icon name="Building" size={40} className="text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Коммерческая недвижимость</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Офисы, торговые площади, склады. Подбор под бизнес-задачи, оформление сделок любой сложности.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Анализ локации и трафика</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Оценка инвестиционного потенциала</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

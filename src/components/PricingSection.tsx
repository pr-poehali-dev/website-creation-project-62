import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Тарифы</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Прозрачное ценообразование без скрытых комиссий</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-none shadow-lg hover:shadow-2xl transition-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2">Консультация</h3>
              <p className="text-muted-foreground mb-6">Экспертная оценка и советы</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Бесплатно</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Первичная консультация</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Оценка объекта</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Анализ рынка</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Записаться</Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
              Популярный
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2">Покупка/Продажа</h3>
              <p className="text-muted-foreground mb-6">Полное сопровождение сделки</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">2%</span>
                <span className="text-muted-foreground ml-2">от суммы</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Подбор объектов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Организация просмотров</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Проверка документов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Торг и переговоры</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Сопровождение до сделки</span>
                </li>
              </ul>
              <Button className="w-full">Заказать услугу</Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-2xl transition-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2">Аренда</h3>
              <p className="text-muted-foreground mb-6">Поиск и оформление аренды</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">50%</span>
                <span className="text-muted-foreground ml-2">месячной платы</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Подбор вариантов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Просмотры объектов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Проверка собственника</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span>Составление договора</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Заказать услугу</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

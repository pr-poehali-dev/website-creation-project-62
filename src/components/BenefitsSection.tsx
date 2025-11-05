import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Преимущества работы с нами</h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">Почему более 500 клиентов выбрали Estate Pro</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Юридическая чистота</h3>
              <p className="text-muted-foreground leading-relaxed">
                Полная проверка документов и истории объекта. Гарантируем безопасность каждой сделки.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="TrendingUp" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Лучшие условия</h3>
              <p className="text-muted-foreground leading-relaxed">
                Помогаем договориться о выгодной цене и условиях. Экономим ваши деньги и время.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Быстрое оформление</h3>
              <p className="text-muted-foreground leading-relaxed">
                Сопровождаем на всех этапах. От подбора объекта до получения ключей — 14 дней.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

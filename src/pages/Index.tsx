import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Estate Pro</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:block">Консультация</Button>
        </div>
      </header>

      <section id="hero" className="pt-24 pb-16 bg-gradient-to-b from-secondary to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Найдём идеальную недвижимость для вас
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональное сопровождение сделок с недвижимостью. Более 500 успешных клиентов за 10 лет работы.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8">
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Каталог объектов
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/62760490-dbe9-4662-bff1-61be80f24563/files/966db426-4602-4801-8083-713fef7f8992.jpg" 
                alt="Недвижимость премиум класса"
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Что говорят те, кто уже работал с нами</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Искали квартиру 3 месяца самостоятельно. С Estate Pro нашли идеальный вариант за неделю. Оформили всё быстро и без проблем. Рекомендую!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">АМ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Анна Михайлова</p>
                    <p className="text-sm text-muted-foreground">Москва</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Продавали квартиру через агентство. Профессиональный подход на всех этапах. Сделку провели чисто, получили свои деньги в срок."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">ДК</span>
                  </div>
                  <div>
                    <p className="font-semibold">Дмитрий Ковалёв</p>
                    <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Отличное агентство! Помогли найти офис для нашего бизнеса. Учли все пожелания, нашли локацию с хорошим трафиком."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">ЕС</span>
                  </div>
                  <div>
                    <p className="font-semibold">Елена Соколова</p>
                    <p className="text-sm text-muted-foreground">Екатеринбург</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут. Работаем ежедневно с 9:00 до 21:00.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">info@estatepro.ru</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Офис</p>
                    <p className="text-muted-foreground">Москва, ул. Тверская, 15</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Петров"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о своих пожеланиях..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Estate Pro</h3>
              <p className="text-white/70">
                Профессиональное агентство недвижимости с 2014 года
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">Покупка</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Продажа</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Аренда</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Коммерческая</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#benefits" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@estatepro.ru</li>
                <li>Москва, ул. Тверская, 15</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>© 2024 Estate Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

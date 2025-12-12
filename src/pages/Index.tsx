import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [email, setEmail] = useState('');

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Регистрация успешна! Увидимся на фестивале 🎉');
      setEmail('');
    }
  };

  const artists = [
    {
      name: 'The Midnight Pulse',
      genre: 'Electronic',
      time: '22:00',
      day: 'friday',
      image: 'https://cdn.poehali.dev/projects/cb22ccf7-a80d-4287-a3f5-b5876e22369c/files/ec4258da-b185-4b39-911c-48c721b06acb.jpg'
    },
    {
      name: 'Neon Dreams',
      genre: 'Synthwave',
      time: '20:00',
      day: 'friday',
      image: 'https://cdn.poehali.dev/projects/cb22ccf7-a80d-4287-a3f5-b5876e22369c/files/00787e80-1174-49f6-bd1a-1335621b37e7.jpg'
    },
    {
      name: 'Aurora Waves',
      genre: 'Indie Rock',
      time: '18:00',
      day: 'friday',
      image: 'https://cdn.poehali.dev/projects/cb22ccf7-a80d-4287-a3f5-b5876e22369c/files/1bbe558e-975c-406c-b6fd-fbc92cc1a3c6.jpg'
    },
    {
      name: 'Stellar Beat',
      genre: 'House',
      time: '23:00',
      day: 'saturday',
      image: 'https://cdn.poehali.dev/projects/cb22ccf7-a80d-4287-a3f5-b5876e22369c/files/ec4258da-b185-4b39-911c-48c721b06acb.jpg'
    },
    {
      name: 'Echo Valley',
      genre: 'Alternative',
      time: '21:00',
      day: 'saturday',
      image: 'https://cdn.poehali.dev/projects/cb22ccf7-a80d-4287-a3f5-b5876e22369c/files/1bbe558e-975c-406c-b6fd-fbc92cc1a3c6.jpg'
    },
    {
      name: 'Digital Horizon',
      genre: 'Techno',
      time: '19:00',
      day: 'saturday',
      image: 'https://cdn.poehali.dev/projects/cb22ccf7-a80d-4287-a3f5-b5876e22369c/files/00787e80-1174-49f6-bd1a-1335621b37e7.jpg'
    }
  ];

  const schedule = {
    friday: artists.filter(a => a.day === 'friday'),
    saturday: artists.filter(a => a.day === 'saturday')
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-background to-background z-0" />
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/cb22ccf7-a80d-4287-a3f5-b5876e22369c/files/00787e80-1174-49f6-bd1a-1335621b37e7.jpg')] bg-cover bg-center opacity-20 z-0" />
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-secondary font-bold text-lg tracking-widest">15-16 ИЮНЯ 2026</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-extrabold mb-6 bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
            LUMINA
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light tracking-wide">
            Музыкальный фестиваль электронной музыки
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all hover:scale-105"
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Купить билет
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all hover:scale-105"
              onClick={() => document.getElementById('lineup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lineup
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <Icon name="ChevronDown" size={40} className="text-primary" />
        </div>
      </section>

      <section id="lineup" className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-slide-up">
            Lineup 2026
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16">
            Лучшие артисты электронной сцены
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <Card 
                key={index} 
                className="bg-card border-border overflow-hidden group cursor-pointer transition-all hover:scale-105 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {artist.genre}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                  <div className="flex items-center text-muted-foreground">
                    <Icon name="Clock" size={16} className="mr-2" />
                    <span>{artist.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            Расписание
          </h2>

          <Tabs defaultValue="friday" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 h-14 bg-card">
              <TabsTrigger value="friday" className="text-lg data-[state=active]:bg-primary data-[state=active]:text-white">
                Пятница, 15 июня
              </TabsTrigger>
              <TabsTrigger value="saturday" className="text-lg data-[state=active]:bg-primary data-[state=active]:text-white">
                Суббота, 16 июня
              </TabsTrigger>
            </TabsList>

            <TabsContent value="friday" className="mt-8">
              <div className="space-y-4">
                {schedule.friday.map((artist, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all">
                    <CardContent className="flex items-center gap-6 p-6">
                      <div className="text-3xl font-bold text-primary min-w-[100px]">
                        {artist.time}
                      </div>
                      <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                        <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{artist.name}</h3>
                        <p className="text-muted-foreground">{artist.genre}</p>
                      </div>
                      <Icon name="Music" size={24} className="text-secondary" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="saturday" className="mt-8">
              <div className="space-y-4">
                {schedule.saturday.map((artist, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all">
                    <CardContent className="flex items-center gap-6 p-6">
                      <div className="text-3xl font-bold text-primary min-w-[100px]">
                        {artist.time}
                      </div>
                      <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                        <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{artist.name}</h3>
                        <p className="text-muted-foreground">{artist.genre}</p>
                      </div>
                      <Icon name="Music" size={24} className="text-secondary" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Локация
              </h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Парк Горького</p>
                    <p className="text-muted-foreground">Москва, Крымский Вал, 9</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Calendar" size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">15-16 июня 2026</p>
                    <p className="text-muted-foreground">Начало в 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Users" size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Вместимость</p>
                    <p className="text-muted-foreground">До 5000 человек</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card border-border p-2">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?ll=37.600916,55.731151&z=16&l=map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="registration" className="py-24 bg-gradient-to-b from-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Регистрация
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Забронируй свой билет прямо сейчас
            </p>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <form onSubmit={handleRegistration} className="space-y-6">
                  <div className="space-y-2 text-left">
                    <Label htmlFor="email" className="text-lg">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-14 text-lg bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Билет на 2 дня</span>
                      <span className="text-2xl font-bold text-primary">3500 ₽</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Доступ ко всем площадкам фестиваля
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6 rounded-full font-semibold transition-all hover:scale-105"
                  >
                    Зарегистрироваться
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                LUMINA
              </h3>
              <p className="text-muted-foreground">
                Ежегодный фестиваль электронной музыки в Москве
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 info@luminafest.ru</p>
                <p>📱 +7 (495) 123-45-67</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Социальные сети</h4>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Music" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-border text-muted-foreground">
            <p>&copy; 2026 LUMINA Festival. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
В TypeScript ключевое слово `abstract` используется для создания абстрактных классов и методов. Абстрактный класс не может быть инстанциирован напрямую, он может содержать абстрактные методы, которые должны быть реализованы в производных классах.

Пример использования `abstract` в TypeScript:

```typescript
abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log('Moving...');
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log('Woof! Woof!');
    }
}

// Нельзя создать экземпляр абстрактного класса
// const myAnimal = new Animal(); // Ошибка компиляции

const myDog = new Dog();
myDog.makeSound(); // Выведет "Woof! Woof!"
myDog.move(); // Выведет "Moving..."
```

В приведенном примере `Animal` - это абстрактный класс с абстрактным методом `makeSound()`. Класс `Dog` наследует `Animal` и обязан реализовать метод `makeSound()`, в противном случае будет ошибка компиляции.


SOLID - это акроним, который представляет собой пять принципов объектно-ориентированного программирования:


Принцип SOLID - это набор принципов объектно-ориентированного программирования, которые помогают создавать более гибкие, понятные и легко поддерживаемые программы. Давайте рассмотрим каждый из принципов SOLID и примеры кода на TypeScript:

1. **Принцип единственной ответственности (Single Responsibility Principle - SRP)**:
Каждый класс должен иметь только одну причину для изменения.

```typescript
class UserService {
    getUserById(id: number) {
        // Логика получения пользователя по ID
    }
}

class UserValidator {
    validateUser(user: User) {
        // Логика валидации пользователя
    }
}
```

2. **Принцип открытости/закрытости (Open/Closed Principle - OCP)**:
Программные сущности должны быть открыты для расширения, но закрыты для модификации.

```typescript
interface Shape {
    calculateArea(): number;
}

class Circle implements Shape {
    radius: number;

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;

    calculateArea() {
        return this.width * this.height;
    }
}
```

3. **Принцип подстановки Барбары Лисков (Liskov Substitution Principle - LSP)**:
Объекты базового класса могут быть заменены объектами производного класса без изменения желаемого поведения программы.

```typescript
class Bird {
    fly() {
        // Логика полета
    }
}

class Duck extends Bird {
    swim() {
        // Логика плавания
    }
}
```

4. **Принцип разделения интерфейса (Interface Segregation Principle - ISP)**:
Много специализированных интерфейсов лучше, чем один универсальный.

```typescript
interface CanFly {
    fly(): void;
}

interface CanSwim {
    swim(): void;
}

class Duck implements CanFly, CanSwim {
    fly() {
        // Логика полета утки
    }

    swim() {
        // Логика плавания утки
    }
}
```

5. **Принцип инверсии зависимостей (Dependency Inversion Principle - DIP)**:
Зависимости внутри системы строятся на основе абстракций.

```typescript
interface Logger {
    log(message: string): void;
}

class ConsoleLogger implements Logger {
    log(message: string) {
        console.log(message);
    }
}

class UserManager {
    logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    addUser(user: User) {
        // Логика добавления пользователя
        this.logger.log('User added');
    }
}
```

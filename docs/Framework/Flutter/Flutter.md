---
layout: default
title: Flutter
nav_order: 1
parent: Framework
has_children: false
---

# {{ page.title }}

======================

## What is Flutter?

You get a widget, you get a widget, everyone gets a widget!
Flutter is an open-source UI software development kit created by Google. It allows developers to build natively compiled applications for mobile, web, and desktop from a single codebase. Flutter uses the Dart programming language and provides its own widgets, which makes it highly customizable and efficient.

### 1) Widget-Based Architecture

- In Flutter, everything is a widget. This is a core principle of the framework that allows for highly customizable and reusable UI components.
- Widgets are used to define the structure and appearance of the UI, and Flutter provides a rich set of pre-built widgets that can be used to compose the UI.

### 2) State Management

- This is a crucial aspect of any Flutter application. There are various strategies for managing state in Flutter, such as Provider, Riverpod, Bloc, etc.
- State management is a complex topic, and there is no one-size-fits-all solution. The best approach depends on the size and complexity of the application.

### 3) Hot Reload & Hot Restart

- Flutter's hot reload feature allows developers to quickly and easily experiment, build UIs, add features, and fix bugs.
- Hot reload injects updated source code files into a running Dart Virtual Machine (VM). This allows you to quickly view the effects of your changes without restarting the app.

---

## Examples

Here are some simple example problems that explore making a coffee. Here is some example dart code:

```dart
class CoffeeMaker {
  void makeCoffee() {
    grindCoffeeBeans();
    brewCoffee();
    pourInCup();
    addCondiments();
  }

  void grindCoffeeBeans() {
    print('Grinding coffee beans');
  }

  void brewCoffee() {
    print('Brewing coffee');
  }

  void pourInCup() {
    print('Pouring coffee into cup');
  }

  void addCondiments() {
    print('Adding condiments to coffee');
  }
}
```

---

### Widget-Based Architecture Example

In this example, we have two widgets: `MyApp` and `MyHomePage`. `MyApp` is the root widget of the application and `MyHomePage` is a child widget. Each widget has a build method that describes the part of the user interface the widget represents. Widgets are composed together to build the complete UI. For example, `MyHomePage` uses `Scaffold`, `AppBar`, `Center`, `Column`, `Text`, and `FloatingActionButton` widgets to define its UI. This is a fundamental aspect of Flutter's widget-based architecture: complex UIs are built by composing a number of simpler widgets.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatelessWidget {
  final String title;

  MyHomePage({Key key, this.title}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '0',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}
```

---

### State Management Example

In this example, we use the `Provider` package for state management with a `Counter` class that notifies listeners of changes. The `ChangeNotifierProvider` makes an instance of `Counter` available to the widget tree, allowing any widget to listen for changes. The `Consumer` widget then rebuilds the UI whenever the `Counter` changes, demonstrating how Flutter allows widgets to react and rebuild when the state changes.

```dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class Counter with ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => Counter(),
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Provider Example')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text('You have pushed the button this many times:'),
              Consumer<Counter>(
                builder: (context, counter, child) => Text(
                  '${counter.count}',
                  style: Theme.of(context).textTheme.headline4,
                ),
              ),
            ],
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () => Provider.of<Counter>(context, listen: false).increment(),
          tooltip: 'Increment',
          child: Icon(Icons.add),
        ),
      ),
    );
  }
}
```

---

## Conclusion

In summary, the approach involved breaking down responsibilities, introducing abstractions/interfaces, and adhering to principles that promote flexibility, extensibility, and maintainability. Each SOLID principle addresses specific concerns, contributing to a more robust and scalable design. This is just a simple example, but there are times where this idea can get highly complex!

---

#### Author: Sommos

#### Since: 17/12/2023

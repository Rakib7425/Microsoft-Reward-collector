# import random
# words = ["apple", "banana", "cherry", "date", "elderberry"]
# random_words = [random.choice(words) for _ in range(5)]

# print(random_words)


# from random_word import RandomWords
# r = RandomWords()
# random_words = r.get_random_words(limit=5)

# print(random_words)

import random

words = []
for i in range(100):
    word = ''.join(random.choices('abcdefghijklmnopqrstuvwxyz', k=random.randint(5, 10)))
    words.append(f'"{word}"')

print(', '.join(words))



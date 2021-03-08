import random

MIN = 1
MAX = 10
score = 0

nb = input('Combien de questions souhaitez vous?')
try:
    for i in range(0, int(nb)):
        print(f'Question {i+1}/{nb}')
        x = random.randint(MIN, MAX)
        y = random.randint(MIN, MAX)
        z = random.randint(0, 1)
        o = '+'
        res = x + y
        if z == 1:
            o = '*'
            res = x * y
        rep = input(f'Calculez {x} {o} {y} : ')
        try:
            if int(rep) == res:
                print('Réponse correcte\n')
                score += 1
            else:
                print('Réponse incorrecte\n')
        except ValueError:
            print('Vous devez entrer un nombre!\n')
except ValueError:
    print('Vous devez entrer un nombre!\n')

print(f'Terminé! Vous avez {str(score)} points!')

if score == 0:
    print('même pas un seul point...')
elif score == 4:
    print('Excellent!')
elif score > int(score / 2):
    print('Fais mieux la prochaine fois!')
elif score > int(score / 2):
    print('Bien joué!')

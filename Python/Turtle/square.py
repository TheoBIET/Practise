import turtle
t = turtle.Turtle()


def carre(taille, nb):
    for i in range(0, nb):
        for x in range(0, 4):
            t.forward(taille)
            t.left(90)
        t.forward(taille + taille / 2)
        taille = (i+2)*taille


carre(50, 5)


turtle.done()

import webbrowser
import time

random_page_generator = [
    "he  l lo"
    # 1
    # " H e l l o ", " W o r l d ", " B i n g ", " C h a t ", " M o d e ",
    # " S e a r c h ", " Q u e r y ", " R e s u l t ", " A n g e l ",
    # " N u m b e r ", " F u s i o n ", " R e a c t o r ", " S u n ",
    # " C o r e ", " T e m p e r a t u r e ", " R e c t i f i c a t i o n ",
    # " I n c o m e ", " T a x ", " R e t u r n ", " S p h e n i c ",
    # " N o n a g o n a l ", " S e l f ", " P o s i t i v e ", " H a r d w o r k "," S u c c e s s "," V e r s a t i l i t y "," F l e x i b i l i t y "," H u m i l i t y "


    # 2
    # "T h e", "s u n", "i s", "s h i n i n g", "a n d", "i t", "i s", "a f", "b e a u t i f u l", "d a y", "o u t s i d e", ".", "I", "h o p e", "y o u", "a r e", "d o i n g", "w e l l", "a n d", "e n j o y i n g", "t h e", "d a y", ".", "D o", "y o u", "n e e d", "a n y", "h e l p", "t o d a y", "gf ghg", "I", "a m", "h e r e", "t o", "a s s i s t", "y o u", "i n", "a n y", "w a y", "I i", "c a n", "T h e", "tyj tyj", "yu tj"

    # 3
    # "q u i c k", "b r o w n", "f o x", "j u m p s", "o v e r", "t h e", "l a z y", "d o g","w i t h", "w h a t e v e r", "y o u", "n e", "e d", "J u s t", "l e t", "m e", "k n o w", "i f", "t h e r e", "i s", "a n y t h i n g", "e l s e", "A", "l i t t l e", "b i r d", "t o l d", "m e", "t h a t", "y o u", "a r e", "l o o k i n g"

    # 4
    # "f o r", "m o r e", "w o r d s","Ief ggt", "a m", "h a p p y", "t o", "h e l p", "y o u", "w i t h", "w h a", "t e v e r", "y o u", "n e e d", "J u s t", "l e t", "m e", "k n o w", "i f", "t h e r e", "i s", "a n y t h i n g", "e l s e", "I", "c a n", "d o"," D e c i s i v e n e s s "," I n d i v i d u a l i t y "," I n d e p e n d e n c e "," S t a b i l i t y "," S t r u c t u r e "," A m b i t i o n "," C h a l l e n g e "," C h a n g e "," U n c e r t a i n t y "


    # 5
    " A t t i t u d e ", " G o a l s ", " D r a g o n ", " I m a g e ",
    " C r e a t i v e ", " C o n t e n t ", " P h o n e ", " I P h o n e ",
    " C h a n g e ", " O p p o r t u n i t y ", " S k i l l s ",
    " S u r v i v e ", " L e a d e r s h i p ", " F r e e d o m ",

]


# webbrowser.open(random_page_generator[1])

def _handbook():
    global _exit_codeG

    for i in range(random_page_generator.__len__()):
        time.sleep(7)
        webbrowser.open(random_page_generator[i]).__ceil__()

    _exit_code = 1


webbrowser.open(_handbook())


# def _handbook():
#     global _exit_codeG

#     for i in range(random_page_generator.__len__()):
#         url = random_page_generator[i]
#         browser_path = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"
#         webbrowser.register("msedge", None, webbrowser.BackgroundBrowser(browser_path))
#         webbrowser.get("msedge").open_new(url)
#         time.sleep(10)

#     _exit_code = 1

# (_handbook())

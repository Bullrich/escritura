---
title: Bases de la argumentación
categories: blog
date: 2016-05-03 00:38:30


published: true
share: true
image:
  feature:
---
<p style="text-align: justify;">La flashe un poco violento pero agrego lo que se de argumentación.</p>


<hr />
<p style="text-align: justify;">La base de la argumentación siempre tiene tres elementos, y puede llegar a tener 6. Esta el [<strong>Dato</strong>], la [<strong>Conclusión</strong>] y la [<b>Garantía</b>] como elementos obligatorios. Un argumento no se puede defender sin esos 3 elementos. Y después hay 3 elementos mas que no son necesarios pero ayudan a desarrollar: el [<strong>Modalizador</strong>], la [<strong>Excepción</strong>] y el [<strong>Respaldo</strong>].</p>
<p style="text-align: justify;">[<strong>Dato</strong>] ---&gt; Por tanto [<strong>Conclusion</strong>] ---&gt;Porque [<strong>Garantía</strong>]</p>
<p style="text-align: justify;">[<strong>Dato</strong>] Harry nació en Bermuda ----&gt; [<strong>Conclusion</strong>] Por lo tanto Harry es súbdito británico, ----&gt; [<strong>Garantía</strong>] Porque quien nace en Bermuda es súbdito británico.</p>
<p style="text-align: justify;">[<strong>Dato</strong>] ---&gt; Por tanto [<strong>Modalizador</strong>], [<strong>Conclusion</strong>] ---&gt;Porque [<strong>Garantía</strong>]</p>
<p style="text-align: justify;">[<strong>Dato</strong>] Harry nació en Bermuda ----&gt; Por lo tanto, [<strong>Modalizador</strong>] presuntamente ----&gt; [<strong>Conclusion</strong>] Harry es súbdito británico, ----&gt; [<strong>Garantía</strong>] Porque quien nace en Bermuda es súbdito británico.</p>
<p style="text-align: justify;">[<strong>Dato</strong>] ---&gt; Por tanto [<strong>Modalizador</strong>], [<strong>Conclusion</strong>] ---&gt;Porque [<strong>Garantía</strong>] ----&gt; Teniendo en cuenta que [<strong>Respaldo</strong>] ----&gt; a menos que [<strong>Excepción</strong>]</p>
<p style="text-align: justify;">[<strong>Dato</strong>] Harry nació en Bermuda ----&gt; Por lo tanto, [<strong>Modalizador</strong>] presuntamente ----&gt; [<strong>Conclusion</strong>] Harry es súbdito británico, ----&gt; [<strong>Garantía</strong>] Porque quien nace en Bermuda es súbdito británico ----&gt; [<strong>Respaldo</strong>] Teniendo en cuenta las Leyes y provisiones legales, ----&gt; A menos que [<strong>Excepción</strong>] sus padres sean extranjeros.</p>


<hr />

Con este pequeño programita que programe se puede probar diversos argumentos.

<iframe title="Titulo" src="http://jbullrich.com.ar/escritura/extra/LyA.html" width="650" height="800" frameborder="0"></iframe>

&nbsp;

<hr />

Aca se encuentra un pdf que toca parte de lo visto en clase:

<strong><a href="https://drive.google.com/file/d/0Bze6rsoQ341zRzYzZWNqSGFVTUE/view?usp=sharing">LINK</a></strong>

<iframe src="https://drive.google.com/file/d/0Bze6rsoQ341zRzYzZWNqSGFVTUE/preview" width="850" height="638"></iframe>

&nbsp;

<hr />

Y la base lógica de todo seria esto (para los que saben programar)

[csharp]
public class Argumentacion
{
  public Dato _dato;
  string _garantia;
  public string _conclusion;
  public Modalizador _modalizador;
  public string _excepcion;
  public string _respaldo;
  
  public bool _faltaRespaldo;
  
  void Start()
  {
    if(!_modalizador.Valido())
    {
      Console.Write(_conclusion);
      showGarantia();
    } else 
    {
      Console.Write(_excepcion);
    }
  }
  
  private void showGarantia()
  {
    Console.Write(_garantia);
    
    if(_faltaRespaldo)
      Console.Write(_respaldo);
  }
}
[/csharp]

Si encuentran un error por favor avisenme!

&nbsp;

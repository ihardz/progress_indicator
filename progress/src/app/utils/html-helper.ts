export class HtmlHelper {

  public static addClass(element: HTMLElement, className: string): void {
    element.classList.add(className);
  }

  public static addClassDelay(element: HTMLElement, className: string, delay: number): Promise<HTMLElement> {
    HtmlHelper.addClass(element, className);
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{ resolve(element) }, delay);
    });
  }  

  public static removeClass(element: HTMLElement, className: string) {
    element.classList.remove(className);
  }
}
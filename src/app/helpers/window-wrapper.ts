export class WindowWrapper {
  /**
   * Navigate to the url passed in.
   * @param url for the window navigation.
   */
  public static navigateToUrl(url: string) {
    window.location.href = url;
  }
}

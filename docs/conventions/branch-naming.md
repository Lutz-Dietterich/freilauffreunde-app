# Branch-Naming-Konvention

## Allgemeine Regeln
- Branch-Namen sollten in **kebab-case** (kleinbuchstaben, mit Bindestrichen) geschrieben werden.
- Präfixe definieren die Art der Änderung.
- Branch-Namen sollten so kurz und präzise wie möglich sein.

## Branch-Präfixe
| Präfix             | Bedeutung |
|--------------------|-----------|
| `feature/<name>`  | Neue Features oder Funktionen |
| `bugfix/<name>`   | Fehlerbehebungen |
| `hotfix/<name>`   | Kritische Fehlerbehebungen in Produktion |
| `docs/<name>`     | Änderungen an der Dokumentation |
| `refactor/<name>` | Code-Umstrukturierungen ohne neues Feature |
| `test/<name>`     | Änderungen an Tests oder Testdaten |
| `chore/<name>`    | Sonstige Änderungen (z. B. CI/CD, Abhängigkeiten) |

## Beispiele für Branch-Namen
- `feature/user-authentication`
- `bugfix/fix-login-error`
- `hotfix/security-patch`
- `docs/update-readme`
- `refactor/improve-api-structure`
- `test/add-unit-tests`
- `chore/update-dependencies`

## Best Practices
- Verwende eine kurze, aber aussagekräftige Beschreibung.
- Trenne Wörter mit Bindestrichen (`-`), keine Unterstriche oder Leerzeichen.
- Falls ein Ticket-System genutzt wird, kann die Ticket-Nummer vorangestellt werden, z. B. `feature/1234-user-auth`.


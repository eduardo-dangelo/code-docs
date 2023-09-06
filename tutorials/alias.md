## Add Alias for importing modules in React

1. **Create a `jsconfig.json` File (or `tsconfig.json` for TypeScript):**
    > If you don't already have one, create a jsconfig.json file in the root directory of your Next.js project. For TypeScript projects, use tsconfig.json instead. Here's an example of a jsconfig.json file:
   ```json
   {
     "compilerOptions": {
       "baseUrl": "./",
       "paths": {
         "@components/*": ["components/*"],
         "@styles/*": ["styles/*"],
         "@utils/*": ["utils/*"]
       }
     }
   }
   ```
   >In this example, we've set up three aliases: @components, @styles, and @utils.
2. **Update Your Import Statements:**
   >After setting up the aliases, you can use them in your import statements like this:
   ```ts
   // Before alias
   import Header from '../../components/Header';
   import styles from '../../styles/Home.module.css';
   
   // After alias
   import Header from '@components/Header';
   import styles from '@styles/Home.module.css';
   ```

3. **Restart Your Development Server:**
   > If you were running your Next.js development server, you may need to restart it to apply the changes.

4. **TypeScript Users Only (Optional):**
   > If you're using TypeScript, you may also need to add the following lines to your tsconfig.json to enable module resolution for the aliases:
   ```json
   "compilerOptions": {
     "baseUrl": "./",
     "paths": {
       "@components/*": ["components/*"],
       "@styles/*": ["styles/*"],
       "@utils/*": ["utils/*"]
     },
     "esModuleInterop": true,
     "allowSyntheticDefaultImports": true
   }
   
   ```
   

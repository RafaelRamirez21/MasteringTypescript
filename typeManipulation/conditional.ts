type MessageOf<Type extends { message: unknown }> = Type["message"];
 
interface Email {
  message: string;
}
 
type EmailMessageContents = MessageOf<Email>;
              
// type EmailMessageContents = string
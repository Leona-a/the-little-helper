/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tlh.api;
import com.tlh.api.VisitLimit;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.core.annotation.AnnotationUtils;
import java.lang.reflect.Method;
import java.net.URI;
import java.net.URISyntaxException;
import java.time.LocalDate;
import java.util.concurrent.ConcurrentHashMap;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;



/**
 *
 * @author 71580
 */
@Aspect
@Component
public class VisitLimitAspect {

 private static final ConcurrentHashMap<String,Integer> limitcache=new ConcurrentHashMap<>();

    /**
     *
     * @param point
     * @return
     * @throws java.lang.Throwable
     */
    @Around("@annotation(com.tlh.api.VisitLimit)")  
    
    public Object requestLimit(ProceedingJoinPoint point) throws Throwable {
   /** RequestAttributes requestAttributes=RequestContextHolder.getRequestAttributes();
    ServletRequestAttributes attributes=(ServletRequestAttributes) requestAttributes;
    HttpServletRequest request=attributes.getRequest();
    MethodSignature signature=(MethodSignature) point.getSignature();
    String token= request.getHeader("token");
    //check token
    Boolean valid=JwUtil.verifyToken(token);
    **/
    
    MethodSignature signature=(MethodSignature) point.getSignature();
    Method method=signature.getMethod(); 
        //get annotation
    VisitLimit visitlimit=AnnotationUtils.findAnnotation(method,VisitLimit.class);
    String now=LocalDate.now().toString();
    String timekey=now+"_"+method.getName();
    if(visitlimit!=null&&visitlimit.limitCounts()>0){
        int limit=visitlimit.limitCounts();
        if(limitcache.get(timekey)==null){
            limitcache.clear();
            limitcache.put(timekey, --limit);   
        }else{
            limit=limitcache.get(timekey);
            if(limit>0){
                limitcache.put(timekey, --limit);
            }else{ 
                return "Can not access";
        }
    }
    }
      return point.proceed();  
    }


}
